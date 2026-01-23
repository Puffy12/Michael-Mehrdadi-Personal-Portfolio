import { readFileSync } from 'fs';
import { join } from 'path';

export const metadata = {
  title: 'Michael Mehrdadi - Resume',
};

export default function ResumePage() {
  // Read the HTML file from the public directory
  const filePath = join(process.cwd(), 'public', 'michael_mehrdadi_resume.html');
  const htmlContent = readFileSync(filePath, 'utf-8');

  // Extract head content (styles, etc.)
  const headMatch = htmlContent.match(/<head[^>]*>([\s\S]*)<\/head>/i);
  const headContent = headMatch ? headMatch[1] : '';

  // Extract body content
  const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const bodyContent = bodyMatch ? bodyMatch[1] : htmlContent;

  // Extract styles from head
  const styleMatch = headContent.match(/<style[^>]*>([\s\S]*)<\/style>/i);
  const styles = styleMatch ? styleMatch[1] : '';

  // Return the HTML content with styles, wrapped in a div that removes default body styling
  return (
    <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div dangerouslySetInnerHTML={{ __html: bodyContent }} />
    </div>
  );
}
