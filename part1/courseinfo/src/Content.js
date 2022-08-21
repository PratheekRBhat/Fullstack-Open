import Part from "./Part"

const Content = (params) => (
  <div>
    <Part part={params.part1} exercises={params.exercises1} />
    <Part part={params.part2} exercises={params.exercises2} />
    <Part part={params.part3} exercises={params.exercises3} />
  </div>
)

export default Content