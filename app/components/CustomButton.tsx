import Link from "next/link";

interface ICustomButton {
    customClass: string;
    text: string;
    link: string;
}

const CustomButton = ({customClass, text, link}: ICustomButton) => {
    return (
        <Link href={link} target="_blank"
              className={`mt-[5vh] mb-[5vh] px-10 py-5 duration-300 rounded-4xl  inline-block border ${customClass}`}
        >
             {text}
        </Link>
    );
};

export default CustomButton;