import type { NextPage } from 'next'
import styles from '../../styles/News.module.css'
import useSWR from 'swr';
import axios from 'axios'
import { Card } from 'antd'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getServerSideProps() {
  const newsData = await prisma.news.findMany()

  return {
    props: {
      data: newsData
    }
  }
}

const News = () => {
  
  const fetcher = (url: string) => {
    const options = {
      method: 'GET',
      url: url,
      params: {companyname: 'Apple Inc.'},
      headers: {
        'X-RapidAPI-Key': '8f217731c5msh8f9b26a3225e183p181599jsn3505f7fa5b8a',
        'X-RapidAPI-Host': 'gaialens-esg-news.p.rapidapi.com'
      }
    };
    
    return axios.request(options).then(function (response) {
      console.error("RES ==>>",response);
      return response.data;
    }).catch(function (error) {
      console.error("err ==>>",error);
    });
  }

  const { data, error } = useSWR('https://gaialens-esg-news.p.rapidapi.com/news', fetcher)

  return (
    <div className={styles.container}>
      {data?.map((news: any) => 
      <>
        <Card className={styles.card}>
          <div className={styles.date}>NEWS | {news.date}</div>
          <div className={styles.title}>{news.title}</div>
          <div className={styles.url}>{news.url}</div>
        </Card>
      </>
      )}
    </div>
  )
}

export default News
