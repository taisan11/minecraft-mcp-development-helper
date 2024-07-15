import { program } from 'commander';
import { initCommand } from './commands/init';

program.addCommand(initCommand);

program.parse(process.argv);