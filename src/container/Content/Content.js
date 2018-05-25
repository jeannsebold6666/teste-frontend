import React, {Component} from 'react';
import axios from 'axios';
//import _ from 'lodash';
import { Grid, Button, Table, ControlLabel, FormControl, FormGroup, HelpBlock } from 'react-bootstrap';

class Content extends Component {

  constructor(props, context) {
    super(props, context);
    this.click.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        data:[],
        value: ''

    };
  }
  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
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
            localStorage.setItem("empresas", JSON.stringify(existingEntries));
        })
        .catch((err)=> {})
    }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }

    componentDidMount() {
        //let storedClicks = JSON.parse(localStorage.getItem('empresas'));
     
            //console.log(storedClicks)
            //this.setState({data: storedClicks});
        
        
        
        
    }
    render() {
        let data = this.state.data;
        return (
        <div>
            <Grid>
                <form>
                    <FormGroup
                    controlId="formBasicText"
                    validationState={this.getValidationState()}
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
                <Table striped bordered condensed hover>
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
                            <td>{datas.id}</td>
                            <td>{datas.cnpj}</td>
                            <td>{datas.nome}</td>
                            <td>{datas.data_fundacao}</td>
                            <td>{datas.situacao_receita} <small>data consulta: <strong>{datas.situacao_receita_data }</strong></small></td>
                            <td> <Button bsStyle="warning">Editar</Button><Button bsStyle="danger">Deletar</Button></td>
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