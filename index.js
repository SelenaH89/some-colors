import chalk from 'chalk';
import randomColor from 'random-colorful';

function getRandomColor() {
  const color = '#' + Math.floor(Math.random() * 16777215).toString(16);

  const fullLine = chalk('#'.repeat(31), color);
  const partLine = chalk('#'.repeat(5), color);
  const partSpace5 = chalk(' '.repeat(5), color);
  const partSpace7 = chalk(' '.repeat(7), color);

  console.log(`${fullLine}
${fullLine}
${fullLine}
${partLine} ${partSpace5} ${partSpace7} ${partSpace5} ${partLine}
${partLine} ${partSpace5} ${chalk(color)(color)} ${partSpace5} ${partLine}
${partLine} ${partSpace5} ${partSpace7} ${partSpace5} ${partLine}
${fullLine}
${fullLine}
${fullLine}`);
}

getRandomColor();
