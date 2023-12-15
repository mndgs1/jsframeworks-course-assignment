import { Button, Heading } from "../../components";
import content from "../../content.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
    .object({
        fullName: yup
            .string()
            .min(3, "Your name should be at least 3 characters.")
            .required("Please enter your first name"),
        email: yup
            .string()
            .email("Please enter a valid email address")
            .required("Please enter your email address"),
        subject: yup
            .string()
            .min(3, "Your subject must be at least 3 characters")
            .required("Please enter a subject"),
        body: yup
            .string()
            .min(3, "Your message should be at least 3 characters.")
            .required("Please enter your message"),
    })
    .required();

export function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data: any) {
        console.log(data);
    }

    const { contactInformation, contactForm } = content.pages.contactPage;

    return (
        <>
            <Heading h1>Contact Us</Heading>
            <div>
                <p>{contactInformation.address}</p>
                <p>{contactInformation.phone}</p>
                <p>{contactInformation.email}</p>
            </div>
            <div>
                <Heading h2>{contactForm.title}</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input {...register("fullName")} />
                        <p>{errors.fullName?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div>
                        <label className="block" htmlFor="subject">
                            Subject:
                        </label>
                        <input {...register("subject")} className="border" />
                        <p>{errors.subject?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="body">Body</label>
                        <input {...register("body")} />
                        <p>{errors.body?.message}</p>
                    </div>

                    <Button primary>Submit</Button>
                </form>
            </div>
        </>
    );
}
