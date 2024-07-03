//Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";
import { getCurrentWeather, getForecastWeather } from "@/state/data/dataSlice";

//Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

//UI
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

//Icon
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const dispatch = useDispatch<AppDispatch>();

  const formSchema = z.object({
    location: z
      .string()
      .min(1, {
        message: "Please provide a location",
      })
      .max(50, {
        message: "Location name is too long",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(getCurrentWeather(values.location));
    dispatch(getForecastWeather(values.location));
  }

  return (
    <div className="max-w-sm mx-auto my-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex ">
          <div className="w-screen">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="text-lg">
                    <Input placeholder="Barcelona" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>
            <Button variant="link" size="icon" type="submit" className="-ml-12">
              <SearchIcon />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
export default Search;
