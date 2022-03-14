import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ className, label, icon, ...props }) => {
  return (
    <button className={`${className}`} type="button" {...props}>
      <FontAwesomeIcon
        icon={icon}
        fixedWidth={true}
        title={label}
        aria-hidden="true"
      />
      <span className="sr-only">{label}</span>
    </button>
  )
}

export default Button
