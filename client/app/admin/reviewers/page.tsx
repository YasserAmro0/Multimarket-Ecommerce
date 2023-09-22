"use client"
import { Table } from 'flowbite-react';
import React from 'react'

const page = () => {
  return (
      <div className="w-3/4 p-4">
          <h1 className="text-2xl font-semibold mb-4">Reviewers</h1>
      <Table hoverable >
        <Table.Head >
          <Table.HeadCell>
            Product name
          </Table.HeadCell>
          <Table.HeadCell>
            Image
          </Table.HeadCell>
          <Table.HeadCell>
            username
          </Table.HeadCell>
          <Table.HeadCell>
            comment
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              Edit
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
              Sliver
            </Table.Cell>
            <Table.Cell>
              Laptop
            </Table.Cell>
            <Table.Cell>
              $2999
            </Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>
                  <i className="ri-delete-bin-5-line text-red-500"></i>

                </p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <p>
                Microsoft Surface Pro
              </p>
            </Table.Cell>
            <Table.Cell>
              White
            </Table.Cell>
            <Table.Cell>
              Laptop PC
            </Table.Cell>
            <Table.Cell>
              $1999
            </Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>
                  <i className="ri-delete-bin-5-line text-red-500"></i>

                </p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>
              Black
            </Table.Cell>
            <Table.Cell>
              Accessories
            </Table.Cell>
            <Table.Cell>
              $99
            </Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>
                  Edit
                </p>
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>
              Black
            </Table.Cell>
            <Table.Cell>
              Accessories
            </Table.Cell>
            <Table.Cell>
              $99
            </Table.Cell>
            <Table.Cell>
              <a
                className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                href="/tables"
              >
                <p>
                  Edit
                </p>
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>  
  )
}

export default page