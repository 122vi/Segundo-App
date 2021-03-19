import React from 'react';
import './style.css'
import excel from '../images/excel.png';
import logistica from '../images/logistica.jpg';
import informatica from '../images/informatica.jpg';

export default function Cards() {
    return (
    <div id='container-cards'>
    <div className='cards'>
        <img src= {excel} alt='' className='imgcards' />
        <h3>Excel Avançado</h3>
        <p className='curso-descricao'>
        Capacita o aluno a utilizar, aplicar e analisar as ferramentas de produtividade do Microsoft Excel. <br></br>
        
        </p>
        <p id='duracao-curso1'>
        carga horária : 40 horas

        </p>
        <hr width='80%' />
        <h4> R$ 520,00 </h4>
    </div>
    <div className='cards'>
        <img src={logistica} alt='' className='imgcards' />
        <h3>Operador de Logistica</h3>
        <p className='curso-descricao'>
        Operar em atividades dos processos logísticos de recebimento, armazenagem, suprimentos, produção e distribuição de mercadorias.<br></br>
       
        </p>
        <br></br><p className='carga-horaria'>
        carga horária : 160 horas

        </p>
        
        <hr width='80%' />
        <h4> R$ 1.536,00 </h4>
    </div>
   
    <div className='cards'>
        <img src= {informatica} alt=''  className='imgcards' />
        <h3>Informática Básica</h3>
        <p className='curso-descricao'>
        O aluno será capaz de operar microcomputador utilizando o sistema operacional Windows, recursos de internet, processamento de texto no Word, criação e utilização de tabelas de cálculo no Excel e apresentações gráficas no PowerPoint. <br></br>
        
        </p>
        <p id='duracao-curso3'>
        carga horária : 60 horas

        </p>
        <hr width='80%' />
        <h4> R$ 1.020,00 </h4>
    </div>

    </div>    
   
    
    );
}

