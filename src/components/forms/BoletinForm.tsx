import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const formSchema = z.object({
	email: z.string().email({ message: "Correo inválido" }),
});

interface BoletinFormProps {
	buttonText: string;
	classes?: string;
}

const BoletinForm: React.FC<BoletinFormProps> = ({ classes, buttonText }) => {
	// 1. Define your form
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});

	// 2. Define a submit handler
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values
		// This will be type-safe and validated
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className={classes}
			>
				<div className="flex flex-col sm:flex-row items-center sm:-space-x-6 gap-y-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="w-full">
								<FormControl>
									<Input
										className="py-6"
										placeholder="Correo electrónico"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="py-6 font-bold w-full md:w-auto"
					>
						{buttonText}
					</Button>
				</div>
			</form>
		</Form>
	);
};
export default BoletinForm;
