import './index.css'

const TabItem = props => {
  const {tabDetails, onUpdateState, isActive} = props
  const {displayText, tabId} = tabDetails

  const onUpdate = () => {
    onUpdateState(tabId)
  }

  const classStyle = isActive ? 'active-tab-btn' : ''
  return (
    <li className="tab-item-container ">
      <button
        onClick={onUpdate}
        type="button"
        className={`tab-btn ${classStyle}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
