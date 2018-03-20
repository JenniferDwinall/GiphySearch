import DocumentHead from 'components/DocumentHead'

export default (props) => <div>
  <DocumentHead docTitle={props.title}>
    <meta charSet='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
  </DocumentHead>
</div>
