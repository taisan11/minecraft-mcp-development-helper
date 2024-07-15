// projectの初期化
import { Argument, Command } from 'commander';

export const initCommand = new Command()
  .command('init')
  .addArgument(new Argument('<dir>', 'プロジェクトのディレクトリと名前を指定します。'))
  .description('プロジェクトを初期化します。')
  .action((dir) => {
    
  });