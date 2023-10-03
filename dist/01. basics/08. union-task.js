"use strict";
function gradeDeveloper(developer, level) {
    developer.level = level;
}
const developer = {
    login: 'sjjssjsj',
    skills: ['ts'],
    level: 'junior',
};
gradeDeveloper(developer, 'middle');
function gradeWorker(worker, level) {
    worker.level = level;
}
