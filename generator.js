import * as model from './model.js'
import * as rpg from './rpg.js'

const FORMAT=Intl.NumberFormat()

function filter(classes,race){
  let favored=[]
  for(let c of Object.keys(classes))
    if(classes[c].find(s=>model.races[race].indexOf(s)))
      favored.push(c)
  return favored
}

export function make(){
  let r=rpg.pick(Object.keys(model.races))
  let c=rpg.pick(filter(model.classes,r))
  let s=rpg.pick(model.signs)
  return `${r} ${s} ${c.toLowerCase()}.`
}

export function count(signs=false){
  let c=0
  for(let r of Object.keys(model.races))
    c+=filter(model.classes,r).length
  if(signs) c*=model.signs.length
  return FORMAT.format(c)
}
