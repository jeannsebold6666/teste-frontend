import React, {Component} from 'react';
import axios from 'axios';
//import _ from 'lodash';
import { Grid, Button, Table, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

class Content extends Component {

  constructor(props, context) {
    super(props, context);
    this.click.bind(this);
    this.delete.bind(this);
    this.edit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        data:[],
        value: '',

    };
  }
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    componentDidUpdate() {
    }
    onload = function() {
        document.getElementById('teses').onclick = function(event) {
            var span, input, text;
    
            // Get the event (handle MS difference)
            event = event || window.event;
    
            // Get the root element of the event (handle MS difference)
            span = event.target || event.srcElement;
    
            // If it's a span...
            if (span && span.tagName.toUpperCase() === "SPAN") {
                // Hide it
                span.style.display = "none";
    
                // Get its text
                text = span.innerHTML;
    
                // Create an input
                input = document.createElement("input");
                input.type = "text";
                input.value = text;
                
                input.size = Math.max(text.length / 4 * 3, 4);
                span.parentNode.insertBefore(input, span);
    
                // Focus it, hook blur to undo
                input.focus();
                input.onblur = function() {
                    // Remove the input
                    span.parentNode.removeChild(input);
    
                    // Update the span
                    span.innerHTML = input.value === "" ? "&nbsp;" : input.value;
                    span.style.background='red';
                    // Show the span again
                    span.style.display = "";
                };
            }
        };
    }

    click(event) {

        event.preventDefault();
        let cnpj = document.getElementById('cnpj').value
        let url = 'https://5ab2810762a6ae001408c26e.mockapi.io/api/dados-empresa/empresa?search='
        axios
        .get(url + cnpj)
        .then(({ data })=> {
            var existingEntries = JSON.parse(localStorage.getItem("empresas"));
            if(existingEntries == null) existingEntries = [];
            localStorage.setItem("empresas", JSON.stringify(data));
            existingEntries.push(data);
            localStorage.setItem("empresas", JSON.stringify(data));
            this.setState({data: data});
        })
        .catch((err)=> {})
    }

    delete(event) {
        localStorage.removeItem("empresas");
    }

    edit(event) {
        
    }

    
    componentDidMount() {
        let storedClicks = JSON.parse(localStorage.getItem('empresas'));
        
        if( storedClicks == null) {
           
        } else {
            this.setState({data: storedClicks});
        }
       
    }
   
    render() {
        let data = this.state.data;
        return (
        <div>
            <Grid>
                <form>
                    <FormGroup
                    controlId="formBasicText"
                    >
                    <ControlLabel>BUSCAR EMPRESAS</ControlLabel>
                    <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Enter text"
                        onChange={this.handleChange}
                        id="cnpj"
                    />
                    <FormControl.Feedback />
                    <HelpBlock></HelpBlock>
                    </FormGroup>
                    <Button onClick={this.click}type="submit">BUSCAR</Button>
                </form> 
                <Table striped bordered condensed hover id="teses">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>CNPJ</th>
                        <th>Empresa</th>
                        <th>Data Fundação</th>
                        <th>Situacao Receita</th>
                        <th>Editar Campos</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {data.map((datas, index)  =>
                            <tr>
                            <td><span >{datas.id}</span></td>
                            <td><span contenteditable="true">{datas.cnpj}</span></td>
                            <td><span contenteditable="true">{datas.nome}</span></td>
                            <td><span contenteditable="true">{datas.data_fundacao}</span></td>
                            <td><span contenteditable="true">{datas.situacao_receita}</span> <small>data consulta: <strong><span contenteditable="true">{datas.situacao_receita_data }</span></strong></small></td>
                            <td> <Button bsStyle="warning" onClick={this.edit}>Editar</Button><Button bsStyle="danger" onClick={this.delete}>Deletar</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Grid>
        </div>
    );
  }
}

export default Content;