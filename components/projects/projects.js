let projectDetails = this.props.projects.map((project) => {
  return (
      <Link to={project.url}><h1>{project.title}</h1></Link>
      <p>{project.description} <Link to={project.url}>>></Link></p>
      <div className="author">
        <div className="author-name">{project.author}</div>
        <div className="vertical-rule" />
        <div className="date">{project.date}</div>
      </div>
      <hr />
  );
})