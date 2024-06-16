//Redux
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/state/store";
import { getCurrentWeather, getForecastWeather } from "@/state/data/dataSlice";

//Custom fetch

//Form
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

//Icons
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  //Redux
  const dispatch = useDispatch<AppDispatch>();

  //Form
  const formSchema = z.object({
    location: z.string().min(1, {
      message: "Please provide a location",
    }),
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(getCurrentWeather(values.location));
    dispatch(getForecastWeather(values.location));
  }

  return (
    <div className="my-10">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=" flex ">
          <div className="w-screen">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
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
