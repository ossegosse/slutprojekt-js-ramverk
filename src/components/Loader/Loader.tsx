import "./Loader.scss"

const Loader = () => {

    return (
        <div>
    {loading && (
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      </div>
      )
}