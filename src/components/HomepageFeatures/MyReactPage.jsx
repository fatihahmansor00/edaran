import Admonition from '@theme/Admonition';
import DocusaurusSvg from '/img/docusaurus.svg';
function MyReactPage() {
  return (
    <div>
      <Admonition type="info">
        <p>Some information</p>
      </Admonition>
      <Admonition type="tip" icon="💡" title="Did you know...">
  Use plugins to introduce shorter syntax for the most commonly used JSX
  elements in your project.
</Admonition>
<DocusaurusSvg className="themedDocusaurus"/>
    </div>
  );
}

export default MyReactPage;