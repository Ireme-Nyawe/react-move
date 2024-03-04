interface BtnProps{
  children:string;
  onClick: ()=>void
}
const Button = ({children, onClick}:BtnProps) => {
  return <button className="btn btn-primary" onClick={onClick}>{children}</button>;
}

export default Button;
