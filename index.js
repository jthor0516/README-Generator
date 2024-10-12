import fs from 'fs';
import inquirer from 'inquirer'

const questions = [

    'What is the title of your project?',

    'Please provide a description (what, why, and how) of your project.',

    'Please list steps for installing your project.',

    'Please input instructions on how to use your project.',

    'Please list Authors of your project',

    'Please enter which liscense your project is using.',

];

function writeToFile(fileName, data) {
    fs.writeFile(`README.md`, data, function (err) {
        err ? console.error(err) : console.info('success')
    })
};

function init() {
    inquirer
        .prompt([
            {
                name: 'title',
                message: questions[0],
                type: 'input'
            },
            {
                name: 'description',
                message: questions[1],
                type: 'input'
            },
            {
                name: 'install',
                message: questions[2],
                type: 'input'
            },
            {
                name: 'howTo',
                message: questions[3],
                type: 'input'
            },
            {
                name: 'authors',
                message: questions[4],
                type: 'input'
            },
            {
                name: 'liscense',
                message: questions[5],
                type: 'input'
            }
        ])
        .then((answers) =>
            writeToFile(answers.title, `## Title\n${answers.title}\n## Description\n${answers.description}\n## Installion\n${answers.install}\n## Usage\n${answers.howTo}\n## Authors\n${answers.authors}\n## Liscense\n${answers.liscense}`)
        )
};

init();
