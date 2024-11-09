'use client';
import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db'; 
import { AIOutput } from '@/utils/schema';
import moment from 'moment';
import { useUser } from '@clerk/nextjs';
import Templates from '@/app/(data)/Templates';
import { Button } from '@/components/ui/button';
import { eq } from 'drizzle-orm';
import Image from 'next/image';

export interface HISTORY {
  id: number;
  formData: string;
  aiResponce: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

const HistoryComponent: React.FC = () => {
  const [historyData, setHistoryData] = useState<HISTORY[]>([]);
  const { user } = useUser();

  useEffect(() => {
    const fetchHistory = async () => {
      const userEmail = user?.primaryEmailAddress?.emailAddress;
      if (userEmail) {
        const result = await db.select().from(AIOutput).where(eq(AIOutput.createdBy, userEmail));
        setHistoryData(result);
      }
    };

    fetchHistory();
  }, [user]);

  return (
    <div>
      {historyData.map((item: HISTORY, index: number) => {
        const template = Templates.find((template) => template.slug === item.templateSlug);
        return (
          <div key={index} className='grid grid-cols-7 my-5 py-3 px-3'>
            <div className='col-span-2 flex gap-2 items-center'>
              {template && (
                <>
                  <Image src={template.icon} alt={template.name} width={25} height={25} />
                  <span>{template.name}</span>
                </>
              )}
            </div>
            <div className='col-span-2 line-clamp-3'>{item?.aiResponce}</div>
            <h2>{moment(item.createdAt).format("DD/MM/YYYY")}</h2>
            <h2>{item?.aiResponce.length}</h2>
            <div>
              <Button
                variant='ghost'
                className='text-primary'
                onClick={() => {
                  navigator.clipboard.writeText(item.aiResponce);
                }}
              >
                Copy
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HistoryComponent;
