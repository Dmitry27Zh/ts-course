type Level = 'junior' | 'middle' | 'senior'

interface Developer {
  login: string
  skills: string[]
  level: Level
}

function gradeDeveloper(developer: Developer, level: Level): void {
  developer.level = level
}

const developer: Developer = {
  login: 'sjjssjsj',
  skills: ['ts'],
  level: 'junior',
}

gradeDeveloper(developer, 'middle')

function gradeWorker(worker: { level: Level }, level: Level): void {
  worker.level = level
}
