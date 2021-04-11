import { getWordDef } from '@/data/words-api';
import { asyncTimeout } from '@/utils/utils';

describe('words-api', () => {

  describe('# getWordDef', () => {
    it('renders props.msg when passed', async () => {
      const testWord = 'eligible';
      const result = await getWordDef(testWord);
      console.log(result, '\n\n');
      expect(result).toBeTruthy();
      await asyncTimeout(4000)
    })
  })  
})