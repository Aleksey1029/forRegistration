type AppButtonProps = {
	buttonText: string;
	Onclick?: () => void;
	buttonType: "submit" | "reset" | "button" | undefined;
};

export const AppButton = ({ buttonText, Onclick, buttonType }: AppButtonProps) => {
	return <button type={buttonType} onClick={Onclick}>{buttonText}</button>
}
