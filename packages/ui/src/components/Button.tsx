export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', children, ...props }: IButtonProps) => {
  return (
    <button className={`bg-red-500 text-gray-200`} {...props}>
      {children}
    </button>
  );
};