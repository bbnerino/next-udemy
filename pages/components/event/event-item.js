import Image from 'next/image'
import React from 'react'

const EventItem = ({item}) => {

  // IMAGE ? NEXT의 이미지 최적화하는 기술
  // 각 운영체제와 장치 크기에 최적화하게 여러버전의 이미지를 만들어준다.
  // 캐시에 저장되어 유사한 장치에서 요청이 들어왔을 때 활용이 가능하다.
  // 이미지의 용량이 10mb => 100kb 까지 줄어들 수 있다.
  // 미리 생성하는 것이 아니라 요청이 있을 때 생성하고, 비슷한 요청일 떄 또 요청한다.
  // 안보이는 이미지는 레이지 로딩이르 늦게 요청이 된다. 
  console.log(item)
  return (
    <div>
      <h1>{item.title}</h1>
      <Image height={100} width={100} src={`/${item.image}`} alt='image'/>
      <p>{item.location}</p>
      <p>{item.description}</p>
      <p>{item.date}</p>
    </div>
  )
}

export default EventItem
