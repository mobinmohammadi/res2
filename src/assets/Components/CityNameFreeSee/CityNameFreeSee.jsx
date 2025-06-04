import React from "react";

export default function CityNameFreeSee({title , hiddenShowAddreas}) {
  return <span onClick={() => hiddenShowAddreas(title)}>{title}</span>;
}
