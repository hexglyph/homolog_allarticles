import type { NextPage } from 'next'
import { GetServerSideProps } from 'next'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import BasicInfo from '../components/BasicInfo'
import Hero from '../components/Hero'
import Layout from '../components/Layout/Layout'
import useAppData from '../data/hook/UseAppData'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

export async function getServerSideProps(context) {
  let res = await axios.get(process.env.NEXT_PUBLIC_APP_API)
    .then((res) => {
      return res.data
    })
  let data = res
  return {
    props: {
      data,
    },
  }
}
export default function Home(props) {
  let data = props.data
  let articles = data.articles
  const router = useRouter()

  const [article, setArticle] = useState(articles[0])
  const [articleNumber, setArticleNumber] = useState(10)
  const [isArticle, setIsArticle] = useState(false)

  function handleLoadMore() {
    setArticleNumber(articleNumber + 10)
  }

  // When the user scrolls the page to the end of the page, the function is called
  useEffect(() => {
    window.onscroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
        handleLoadMore()
      }
    }
  }, [
    articleNumber,
    handleLoadMore
  ])

  return (
    <Layout>
      <div className="w-full flex flex-wrap items-stretch justify-center py-4">
        <h2 className='text-2xl font-semibold text-slate-50'>Artigos</h2>
        <div className="w-full flex flex-wrap gap-4 items-stretch justify-center py-4">
          {
            articles.slice(0, articleNumber).map((item, index) => {
              return (
                <div key={index} className="w-full md:w-1/2 lg:w-1/4 h-auto flex flex-col items-start justify-center bg-slate-200 rounded-md border border-sky-700/50 p-4">
                  <span className='text-xs'>
                    {
                      // date format dd/mm/yyyy hh:mm
                      // 2022-11-06T01:04:00Z to 06/11/2022 01:04
                      'Publicado em ' + item.publishedAt.split('T')[0].split('-').reverse().join('/') + ' às ' + item.publishedAt.split('T')[1].split('.')[0].slice(0, 8)
                    }
                  </span>
                  <h3 className='font-semibold py-2'>
                    <Link href={item.url} target="_blank" className=''>
                      {item.title}
                    </Link>
                  </h3>
                  <p className='italic'>por {item.author} ({item.source.name})</p>
                  <p className='text-sm py-2'>{item.description}</p>
                  <p className='py-2'>
                    {
                      item.content && item.content.replace(/\[.*\]/, '...')
                    }
                    <Link href={item.url} target="_blank" className='font-semibold'>
                      [Leia mais]
                    </Link>
                  </p>

                  <div className='w-full flex-col items-end justify-end'>
                    <Link href={item.url} target="_blank" className=''>
                      <img className='rounded' src={item.urlToImage} alt={''} />
                    </Link>
                  </div>
                </div>
              )
            })
          }



        </div>
        <button onClick={handleLoadMore} className='w-full py-4 bg-sky-700 font-semibold'>Carregar mais artigos</button>
      </div>
    </Layout>
  )
}
