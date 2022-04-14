import React, { Component } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem
} from "@material-ui/core";
import ReactSelect  from 'react-select';
import moment from "moment";
import { getUsers, getAllCompanies } from "../../service";

const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white', width: 300, minHeight: 55, fontSize:17,  fontFamily: 'Roboto, sans-serif' }),
  option: styles => ({ ...styles,  textAlign: 'start', fontFamily: 'Roboto, Helvetica, Arial, sans-serif', fontSize:'1rem', fontWeight:400})

};

class Report extends Component {
  constructor() {
    super();
    this.state = {
      calls: {
        status: "",
        kind: "",
        system: "",
        user: "",
        company: {
          label: "",
          value: "",
          id: null
        }
      },
      users: [],
      companies:[]
    };
  }

  componentWillMount() {
    getUsers().then(res => {
      this.setState({users: res.users});
    });

    getAllCompanies().then((res) => {
      this.setState({
        companies: res.companies.map((company) => company.kind === "NOTARY" ? {
          target: {
            name: 'company',
            value: { label: company.lawyer, id: company._id, value: company.lawyer}
          },
          label: company.lawyer,
          value: company.lawyer
        } : {
          target: {
            name: 'company',
            value: {label: company.name, id: company._id, value: company.name}
          },
          label: company.name,
          value: company.name
        })
      })
    });
  }

  handleChange = e => {
    const { calls } = this.state;

    let field = e.target.name;
    calls[field] = e.target.value;

    this.setState({ calls: calls });
  };

  handleCompany = e => {
    if (e) {
      this.changeProps(e);
    } else {
      this.changeProps({target: {name: 'company', value: {label: '', id: '', value: ''}}});
    }
  }

  changeProps = e => {
    this.handleChange(e);
    this.props.handleFilter(
        this.state.calls.status,
        this.state.calls.kind,
        this.state.calls.system,
        this.state.calls.user,
        this.state.calls.company.id
    );
  };

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item sm={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-status-simple">Estatus</InputLabel>
            <Select
              align="left"
              name="status"
              value={this.state.calls.status}
              onChange={this.changeProps}
              input={
                <OutlinedInput
                  labelWidth={60}
                  name="status"
                  id="outlined-status-simple"
                />
              }
            >
              <MenuItem value="">
                <em>Ninguno</em>
              </MenuItem>
              <MenuItem value="FINALIZED">Finalizada</MenuItem>
              <MenuItem value="PENDING DEVELOPMENT">
                Pendiente Desarrollo
              </MenuItem>
              <MenuItem value="PENDING SUPPORT">Pendiente Soporte</MenuItem>
              <MenuItem value="PENDING VISITS">Pendiente Visitas</MenuItem>
              <MenuItem value="SALES">Ventas</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-kind-simple">
              Tipo de Soporte
            </InputLabel>
            <Select
              align="left"
              name="kind"
              value={this.state.calls.kind}
              onChange={this.changeProps}
              input={
                <OutlinedInput
                  labelWidth={120}
                  name="kind"
                  id="outlined-kind-simple"
                />
              }
            >
              <MenuItem value="">
                <em>Ninguno</em>
              </MenuItem>
              <MenuItem value="CALL">Llamada</MenuItem>
              <MenuItem value="SOS">S.O.S.</MenuItem>
              <MenuItem value="REVERSE">Inverso</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item sm={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel htmlFor="outlined-system-simple">Sistema</InputLabel>
            <Select
              align="left"
              name="system"
              value={this.state.calls.system}
              onChange={this.changeProps}
              input={
                <OutlinedInput
                  labelWidth={60}
                  name="system"
                  id="outlined-system-simple"
                />
              }
            >
              <MenuItem value="">
                <em>Ninguno</em>
              </MenuItem>
              <MenuItem value="MINOTARIA">Minotaria</MenuItem>
              <MenuItem value="CALCULOFACIL">Caculofacil</MenuItem>
              <MenuItem value="LISTASPB">ListasPB</MenuItem>
              <MenuItem value="CFDI">CFDI</MenuItem>
              <MenuItem value="UIF">UIF</MenuItem>
              <MenuItem value="RACOO NOTARIOS">Racoo Notarios</MenuItem>
              <MenuItem value="MINOTARIA/IMPLEMENTACION">
                Minotaria(Implementación)
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>

        {moment(this.props.date.init).isSameOrAfter("2019-02-25") ? (
          <Grid item sm={2}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-user-simple">Consultor</InputLabel>
              <Select
                align="left"
                name="user"
                value={this.state.calls.user}
                onChange={this.changeProps}
                input={
                  <OutlinedInput
                    labelWidth={120}
                    name="user"
                    id="outlined-user-simple"
                  />
                }
              >
                <MenuItem value="">
                  <em>Ninguno</em>
                </MenuItem>
                {this.state.users.map((user, i) => (
                  <MenuItem key={i} value={user._id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

        ) : null}
        <Grid item sm={2}>
          <FormControl variant="outlined" fullWidth>
            <ReactSelect
                styles={colourStyles}
                options={this.state.companies}
                value={this.state.calls.company.value ==="" ? this.state.calls.company.value : this.state.calls.company}
                onChange={this.handleCompany}
                placeholder="Compañia"
                isClearable
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}

export default Report;
