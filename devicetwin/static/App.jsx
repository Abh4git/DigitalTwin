var contentNode = document.getElementById('contents');


class IssueFilter extends React.Component {
  render() {
	const borderedStyle={border : "1px Solid Silver", padding: 6};
	return (
	<div> This is placeholder for Issue Filter.</div>
	)
  }
}


class IssueTable extends React.Component {
  render() {

	 const borderedStyle={border : "1px Solid Silver", padding: 6};
	 
	const issueRows=this.props.issues.map(issue => <IssueRow key={issue._id} issue={issue}/>);

	return (
	 <table style={{borderCollapse : "collapse"}}>
          <thead>
	   <tr>
           <th style={borderedStyle}>Id</th> 
	   <th style={borderedStyle}>Title</th>
	   <th style={borderedStyle}>Status</th>	
	   <th style={borderedStyle}>Created</th>
	   <th style={borderedStyle}>CompletionDate</th>
	   <th style={borderedStyle}>Effort</th>
	   </tr>
	  </thead>
	  <tbody>
          {issueRows}

	  </tbody>
         </table>
	)
  }
}


class IssueAdd extends React.Component {
  constructor()
  {
	  super();
	  this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleSubmit(e)
  {
	e.preventDefault();
	var form = document.forms.issueAdd;
	this.props.createIssue({
		title: form.title.value,
		status: 'New',
		created: new Date()
	})
	//clear for next
	form.title.value='';
  }
  
  render() {
	return (
	 <div> 
	  <form name="issueAdd" onSubmit={this.handleSubmit}>
	  <input type="text" name="title" placeholder="Title"/>
	  <button>Add</button>
	  </form>
	 </div>
	)
  }
}

class IssueList extends React.Component {
  constructor()
  {
	  super();
	  this.state={issues:[]};
	  this.createIssue = this.createIssue.bind(this);
	  //this.createTestIssue = this.createTestIssue.bind(this);
	  //setTimeout (this.createTestIssue,2000);
  }
  
  componentDidMount() 
  {
	  this.loadData();
  }
  
  
  //To fetch from database
  
    loadData()
  {
	  console.log('loading data');
	  fetch('/api/issues').then(response => {
		  if (response.ok) {
			  response.json().then(data => {
					console.log("Total issues:",data._metadata.total_count);
				   data.records.forEach(issue => {
			   issue.created=new Date(issue.created);
			   if (issue.completionDate)
			     issue.completionDate = new Date(issue.completionDate);
			  });
		  
		  this.setState({issues:data.records});
			  });
		  } else {
			  response.json.then(error => {
				  alert('Failed with :' + error);
			  });
			  
		  }	  
	    }).catch (err=> {
			console.log(err);
		   
		});
  }
  
  loadData1()
  {
	  fetch('/api/issues').then (response=>
	   response.json()
	   ).then(data => {
		   console.log("Total issues:",data._metadata.total_count);
		   data.records.forEach(issue => {
			   issue.created=new Date(issue.created);
			   if (issue.completionDate)
			     issue.completionDate = new Date(issue.completionDate);
		   });
		   this.setState({issues:data.records});
	    }).catch (err=> {
			console.log(err);
		   
		});
  }

  createIssue(newIssue)
  {
  
	  fetch('/api/issues', {
		  method:'POST', 
		  headers:{'Content-Type':'application/json'},
		  body:JSON.stringify(newIssue)
	  }).then (response=>{
	    if(response.ok) {
		  response.json().then(updatedIssue => {
		   updatedIssue.created = new Date(updatedIssue.created);
		   if(updatedIssue.completionDate)
			updatedIssue.completionDate = new Date(updatedIssue.completionDate);
		   const newIssues =this.state.issues.concat(updatedIssue);
		   this.setState({issues:newIssues});
		  });
		  } else {
			  response.json().then(error=> {
				  alert("Failed to add issue:"+ error.message);
			  });
		  }
	    }).catch (err=> {
			console.log("Error sending data to server:" + err.message);
		   
		});
		

  }
  
  createTestIssue() {
	  this.createIssue({
		  status:'New', title:'Test Issue', created: new Date()
	  
	  })
  }
  

  
  
  render (){
	console.log('Render called');
	return (
         <div>
	  <h1> Issue Tracker </h1>
	   <IssueFilter />
	  <hr/>
	   <IssueTable issues={this.state.issues} />
          <hr/>

	   <IssueAdd createIssue={this.createIssue}/>
	</div>
        );
  }
  
}

class IssueRow extends React.Component {
  render(){
	const borderedStyle={border : "1px Solid Silver", padding: 4};
        const issue = this.props.issue;
	return (
	 <tr>
	 <td style={borderedStyle}>{issue._id}</td>
	 <td style={borderedStyle}>{issue.title}</td>
	 <td style={borderedStyle}>{issue.status}</td>
	 <td style={borderedStyle}>{issue.created.toDateString()}</td>
         <td style={borderedStyle}>{issue.completionDate? issue.completionDate.toDateString():''}</td>
         <td style={borderedStyle}>{issue.effort}</td>
         </tr>
	);
  }
}
       // A simple component, written in JSX
ReactDOM.render(<IssueList/>, contentNode);      // Render the component inside the content Node