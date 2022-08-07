export var races={
  'Altmer':['alchemy','enchant','destruction'],
  'Bosmer':['marksman'],
  'Dunmer':['destruction','short blade'],
  'Orsimer':['block','armorer','medium armor','heavy armor'],
  'Argonian':['athletics'],
  'Khajiit':['acrobatics'],
  'Breton':['conjuration','restoration','mysticism'],
  'Imperial':['long blade','speechcraft','mercantile'],
  'Nord':['medium armor','axe','blunt weapon'],
  'Redguard':['long blade'],
}

export var classes={
  'Acrobat':['acrobatics','athletics','sneak','marksman','unarmored'],
  'Agent':['acrobatics','speechcraft','sneak','light armor','short blade'],
  'Archer':['athletics','block','light armor','marksman','long blade'],
  'Assassin':['acrobatics','sneak','short blade','marksman','light armor'],
  'barbarian':['axe','blunt weapon','block','medium armor','athletics'],
  'bard':['alchemy','acrobatics','speechcraft','block','long blade'],
  'battlemage':['alteration','conjuration','destruction','axe','heavy armor'],
  'crusader':['destruction','block','heavy armor','blunt weapon','long blade'],
  'healer':['alteration','restoration','mysticism','speechcraft','hand-to-hand'],
  'knight':['speechcraft','block','heavy armor','axe','long blade'],
  'mage':['alteration','destruction','restoration','illusion','mysticism'],
  'monk':['acrobatics','athletics','sneak','hand-to-hand','unarmored'],
  'night blade':['sneak','short blade','alteration','mysticism','illusion'],
  'pilgrim':['speechcraft','mercantile','marksman','medium armor','restoration'],
  'rogue':['mercantile','short blade','hand-to-hand','light armor','axe'],
  'scout':['athletics','sneak','block','medium armor','long blade'],
  'sorcerer':['alteration','conjuration','destruction','mysticism','enchant'],
  'spellsword':['alteration','destruction','restoration','block','long blade'],
  'thief':['acrobatics','sneak','security','light armor','short blade'],
  'warrior':['athletics','block','medium armor','heavy armor','long blade'],
  'with hunter':['alchemy','enchant','conjuration','light armor','marksman'],
}

export var signs=['apprentice','atronach','mage','ritual','lord','tower','lady','lover','thief','serpent','steed','shadow','warrior']

export function test(){
  let skills=new Set(['spear'])
  for(let r of Object.keys(races)) 
    for(let skill of races[r]) skills.add(skill)
  for(let c of Object.keys(classes)) 
    for(let skill of classes[c]) skills.add(skill)
  if(skills.size!=27) throw skills.size+' skills!'
}
