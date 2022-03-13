const Button = ({ className, ...props }) => {
  return <button className={`${className}`} type="button" {...props} />
}

export default Button
