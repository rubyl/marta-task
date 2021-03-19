import React from 'react'
import { HiOutlineHome, HiOutlineUsers, HiOutlinePuzzle, HiOutlineLocationMarker} from "react-icons/hi";
import { BiBed, BiDirections } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

const svg = {
  Home: HiOutlineHome,
  Household: HiOutlineUsers,
  Accomodation: BiBed,
  "Preferred activities": HiOutlinePuzzle,
  "The Location": HiOutlineLocationMarker,
  Distance: BiDirections
};

const Details = ({ details, column, id }) => {
  const { t } = useTranslation('data');
  const Icon = svg[details.title];

  const RenderList = ({ details, name }) => {
    return (<ul>
      {details.map((item, index) => {
        return <li key={ index }>{t(`data:${column}.${id}.${name}.${index}`, item)}</li>
      })}
    </ul>)
  }

  const Details = ({ type }) => {
    let itemsToRender;
    switch (type.title) {
      case "Distance":
      case "Accomodation":
        itemsToRender = (
          <>
            <RenderList details={type.details} name="details" />
            <RenderList details={type.moreDetails} name="moreDetails"/>
          </>
        )
        break;
      case "Preferred activities":
        itemsToRender = (
          <span>{t(`data:${column}.${id}.details`, { joinArrays: ', '})}</span>
        )
        break;
      default:
        itemsToRender = (<RenderList details={ type.details } name="details"/>)
    }
    return itemsToRender
  }

  return (
    <div className="mb-5">
      <h5><Icon /> {t(`data:${column}.${id}.title`, details.title)}</h5>
      <p>{t(`data:${column}.${id}.description`, '')}</p>
        <Details type={details} />
    </div>
  )
}

export default Details;
