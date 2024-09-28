import {isResumeData} from '../../lib/resume';
import resumeData from '../../resume.json';

describe('isResumeData', () => {
  it('should return true for a valid ResumeData object', () => {
    expect(isResumeData(resumeData)).toBe(true);
  });
});
