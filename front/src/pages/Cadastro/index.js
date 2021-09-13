import React, { useState } from 'react';
import {
    Card,
    CardContent,
    TextFild,
    Button,
    Typography
} from '@material-ui/core';

import useStyles from './styles';

import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Cadastro() {
    const classes = useStyles();
    const { register, handleSubmit } = useForm();

    function onSubmit(data){
        if(data.senha !== data.senhaRepetida){
            console.log('as senhas devem ser iguais')
            return;
        }
        

        const resposta = await fetch('//colocar a rota da api criada no herokuapp /usuarios', {
            method: ' POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        const dados = await resposta.json();
    }

    return (
        <div className={classes.root}>
            <Card className={classes.card}>
                <CardContent>
                    <form
                       className={classes.form}
                       noValidate
                       autoComplete='off'
                       onSubmit={handleSubmit(onSubmit)}
                    >
                      <Typography variant='h4'>Criar uma conta</Typography>
                      <TextFild className={classes.input} label="Nome" {...register('nome', { required: true})} /> 
                      <TextFild className={classes.input} label="Nome da Loja" {...register('nome_loja', { required: true})} />
                      <TextFild className={classes.input} label="E-mail" {...register('email', { required: true})} />
                      <TextFild className={classes.senha} label="Senha" {...register('senha', { required: true})} type="password" />
                      <TextFild className={classes.senha} label="Repita a senha" {...register('senhaRepetida', { required: true})} type="password"  /> 
                      <Button className={ classes.botao} type="submit">
                      CRIAR CONTA    
                     </Button> 
                     <Typography variant='body2'>Já possui uma conta? <Link to='/'>ACESSE</Link>
                     </Typography>
                        
                    </form>    

                </CardContent>
            </Card>
        </div>
    );
    
}


export default Cadastro