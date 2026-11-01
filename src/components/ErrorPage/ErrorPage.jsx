import { Link } from "react-router";

function ErrorPage () {
  return (
    <div>
      <p>This page does not Exist!</p>
      <Link to="/">Click here to get Back</Link>
    </div>
  )
}

export default ErrorPage
