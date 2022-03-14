import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = ({ className, label, icon, ...props }) => {
  return (
    <button
      className={`${className} p-1 aspect-square hover:bg-highlight focus:bg-highlight focus:outline-none focus:ring rounded-full`}
      type="button"
      {...props}
    >
      <FontAwesomeIcon
        icon={icon}
        fixedWidth={true}
        title={label}
        aria-hidden="true"
        size="lg"
      />
      <span className="sr-only">{label}</span>
    </button>
  )
}

export default Button
