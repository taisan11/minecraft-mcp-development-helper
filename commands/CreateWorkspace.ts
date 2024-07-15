// projectの初期化
import { Argument, Command } from 'commander';

export const initCommand = new Command()
  .command('createWorkspace')
  .description('プロジェクトを初期化します。')
  .alias('cw')
  .action((dir) => {
    
  });