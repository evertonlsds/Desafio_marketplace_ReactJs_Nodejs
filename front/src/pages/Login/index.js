import React from 'react';
import {
    Card,
    CardContent,
    TextFild,
    Button,
    Typography
} from '@material-ui/core'
import { useForm } from 'react-hook-form';


import useStyles from './styles'
import { Link } from 'react-router-dom'


function Login() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();


   async function onsubmit(data) {
        const resposta = await fetch('//colocar a rota da api criada no herokuapp /login', {
            method: ' POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const dados = await resposta.json();
    }

    return(
        <div className= {classes.card}>
            <Card className={classes.card}>
                <CardContent>
                    <form
                        className={classes.form}
                        noValidate
                        autoComplete= "off"
                        onSubmit={handleSubmit(onsubmit)}
                    >
                       <Typography variant="h4">Login</Typography>   
                       <TextField className={classes.email} label="E-mail" {...register('email', {
                        required: true})} />
                       <TextField className={classes.senha} label="Senha" {...register('senha', {
                        required: true})} type='password' />
                        <Button className={classes.botao} type= "submit">Entrar</Button>
                        <Typography variant="body2">
                            Primeira vez aqui? <Link to= '/cadastro'>CRIE UMA CONTA</Link>
                        </Typography>    

                    </form>
                </CardContent>
            </Card>
        </div>
    )
}


export default Login