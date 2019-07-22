import React from 'react'
import './Palette.css'

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const PaletteItem = ({ color, active, onClick }) => {
  return (
    <div 
      className={`PaletteItem ${active ? 'active' : ''}`}
      style={{ background: color }}
      onClick={onClick}
    ></div>
  )
}

export const Palette = ({ selected }) => {
  return (
    <div className="Palette"> 
      <h2>색상 선택</h2>
      <div className="colors">
        {colors.map(color => (<PaletteItem color={color} key={color} active={selected === color}/>))}
      </div>
    </div>
  )
}
