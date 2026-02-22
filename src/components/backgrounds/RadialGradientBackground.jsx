import React from 'react'

const RadialGradientBackground = ({
  variant = 'hero',
  gradients = [],
}) => {
  const variants = {
    hero: [
      {
        position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
        size: 'w-[1400px] h-[1400px]',
        colors: [
          { color: 'rgba(141,225,105,0.5)', stop: '0%' },
          { color: 'rgba(141,225,105,0.3)', stop: '40%' },
          { color: 'rgba(141,225,105,0.15)', stop: '70%' },
          { color: 'rgba(141,225,105,0)', stop: '100%' },
        ],
        blur: '0px',
        opacity: 0.5,
      },
    ],
    about: [
      {
        position: 'bottom-0 left-[75%]',
        size: 'w-[700px] h-[700px]',
        colors: [
          { color: 'rgba(141,225,105,0.4)', stop: '0%' },
          { color: 'rgba(141,225,105,0.2)', stop: '60%' },
          { color: 'rgba(141,225,105,0)', stop: '100%' },
        ],
        blur: '0px',
        opacity: 0.5,
      },
    ],
  }

  const activeGradients =
    variant === 'custom'
      ? gradients
      : variants[variant] || variants.hero

  const generateGradient = (colors) =>
    `radial-gradient(circle at center, ${colors
      .map(({ color, stop }) => `${color} ${stop}`)
      .join(', ')})`

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {activeGradients.map((gradient, index) => (
        <div
          key={index}
          className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
          style={{
            background: generateGradient(gradient.colors),
            filter: `blur(${gradient.blur})`,
            opacity: gradient.opacity,
          }}
        />
      ))}
    </div>
  )
}

export default RadialGradientBackground







// import React from 'react'

// const RadialGradientBackground = ({variant ='hero', gradients=[]}) => {

//   const variants = {
//     hero: [
//       {
//         position: 'top-1 left-1 -translate-x-1/2 -translate-y-1/2',
//         size:'w-[1400px] h-[1400px]',
//         colors:[
//           { color: 'rgba(141,225,105,0.25)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.5)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.25)',stop:'100%'},
//         ],
//         blur: '0px',
//         opacity: 0.5,
//       },
//       {
//         position: 'top-1 left-1',
//         size: 'w-[1400px] h-[1400px]',
//         colors: [
//           { color: 'rgba(141,225,105,0.25)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.5)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//           { color: 'rgba(141,225,105,0.25)',stop:'100%'},
//         ],
//         blur: '0px',
//         opacity: 0.5,
//       },
//       {
//         position: 'bottom-1 right-1',
//         size:'w-[1400px] h-[1400px]',
//         colors: [
//             { color: 'rgba(141,225,105,0.25)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.5)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.25)',stop:'100%'}, 
//         ],
//         blur: '0px',
//         opacity: 0.5,
//       },
//     ],
//     about:[
//       {
//         position: 'bottom-0 left-[75%]',
//         size: 'w-[700px] h-[700px]',
//         colors: [
//             { color: 'rgba(141,225,105,0.25)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.5)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.45)',stop:'100%'},
//             { color: 'rgba(141,225,105,0.25)',stop:'100%'}, 
//         ],
//          blur: '0px',
//          opacity: 0.5,
//       },
//     ],
//   }

//   const activeGradients = variant === 'custom'?gradients : variants[variant] || variants.hero;

//   const generateGradient = (colors) => {
//     const colorStops = colors.map(({color, stop})=> `${color} ${stop}`).join(', ')
//      return `radial-gradient(circle at center, transparent 0%, transparent 30%, ${colorStops}, transparent 60%, transparent 100%)`
//   }

//   return (
//     <div className='absolute inset-0 overflow-hidden pointer-events-none'>
//       {activeGradients.map((gradient, index)=>{
//         <div
//         key={index}
//         className={`absolute ${gradient.position} ${gradient.size} rounded-full`}
//         style={{
//           background: generateGradient(gradient.colors),
//           filter: `blur(${gradient.blur})`,
//           opacity: gradient.opacity,
//         }}
//         />
//       })}
//     </div>
//   )
// }

// export default RadialGradientBackground