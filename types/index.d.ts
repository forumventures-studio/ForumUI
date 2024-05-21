declare module "forumui" {
  export interface ButtonProps {
    children?: React.ReactNode;
    primary?: boolean;
    backgroundColor?: string;
    label?: string;
    size?: "small" | "medium" | "large";
    className?: string;
    onClick?: () => void;
  }

  export const Button: React.ComponentType<ButtonProps>;
}
