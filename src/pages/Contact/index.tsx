import { Button, Heading, Paragraph } from "../../components";
import content from "../../content.json";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

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
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data: {
        fullName: string;
        email: string;
        subject: string;
        body: string;
    }) {
        console.log(data);
        reset();
        setSuccessMessage(
            `Thank You for contacting us. We will come back to you as soon as possible!`
        );
    }

    const [successMessage, setSuccessMessage] = useState("");

    const { contactInformation, contactForm } = content.pages.contactPage;

    return (
        <>
            <Heading h1>Contact Us</Heading>
            <div>
                <Paragraph>{contactInformation.address}</Paragraph>
                <Paragraph>{contactInformation.phone}</Paragraph>
                <Paragraph>{contactInformation.email}</Paragraph>
            </div>
            <div>
                <Heading h2>{contactForm.title}</Heading>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="fullName">Full Name</label>
                        <input {...register("fullName")} id="fullName" />
                        <Paragraph error>{errors.fullName?.message}</Paragraph>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input {...register("email")} id="email" />
                        <Paragraph error>{errors.email?.message}</Paragraph>
                    </div>
                    <div>
                        <label className="block" htmlFor="subject">
                            Subject:
                        </label>
                        <input
                            {...register("subject")}
                            className="border"
                            id="subject"
                        />
                        <Paragraph error>{errors.subject?.message}</Paragraph>
                    </div>
                    <div>
                        <label htmlFor="body">Body</label>
                        <input {...register("body")} id="body" />
                        <Paragraph error>{errors.body?.message}</Paragraph>
                    </div>

                    <Button primary>Submit</Button>
                </form>
                {successMessage && (
                    <Paragraph success>{successMessage}</Paragraph>
                )}
            </div>
        </>
    );
}
