var work = this.props.data.work.map((work) => {
    var keys = Object.keys(work)
    var index = keys.indexOf("id");
    if (index > -1) {
      // removes the "id" element from the keys.
      keys.splice(index, 1);
   }
   var divs = keys.map(k => <li>{work[k]}</li>)        
    return (
      <div>
        <h3>{work.company}</h3>
        <p className="info">
          {work.title}
          <span>&bull;</span> <em className="date">{work.years}</em>
        </p>
        <p>
          {work.bullets.map(bullets => (
            <li key={work.id}> {bullets}</li>
          ))}
        </p>
      </div>
    );
  });