import Part from "./Part"

const Content = (params) => (
  <div>
    <Part part={params.parts[0].name} exercises={params.parts[0].exercises} />
    <Part part={params.parts[1].name} exercises={params.parts[1].exercises} />
    <Part part={params.parts[2].name} exercises={params.parts[2].exercises} />
  </div>
)

export default Content