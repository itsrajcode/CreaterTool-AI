"use client";
import React, { useContext, useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import Link from "next/link";
import { chatSession } from "@/utils/Aimodel";
import Templates from "@/app/(data)/Templates";
import { TotalUsageContext } from "@/app/(context)/TotalusageContext";
import { useRouter } from "next/navigation";
import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";

interface Props {
  params: {
    "template-slug": string;
  };
}

const CreateNewContent: React.FC<Props> = ({ params }) => {
  const SelectedTemplate = Templates.find(
    (item) => item.slug === params["template-slug"]
  );

  if (!SelectedTemplate) {
    return <div>Template not found</div>;
  }

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext);
  const router = useRouter();
  const {updateCreditUsage, setUpdateCreditUsage} = useContext(UpdateCreditUsageContext)

  const GenerateAIContent = async (formData: Record<string, any>) => {
    if (totalUsage >= 10000) {
      router.push("/dashboard/billing");
      return;
    }
    setLoading(true);
    const selectedPrompt = SelectedTemplate.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;
    const result = await chatSession.sendMessage(finalPrompt);
    const responseText = result?.response.text();

    setAiOutput(responseText);
    setLoading(false);
    await SaveInDb(formData, SelectedTemplate.slug, responseText);

    setUpdateCreditUsage(Date.now())
  };

  const SaveInDb = async (formData: Record<string, any>, slug: string, aiOutput: string) => {
    const result = await db.insert(AIOutput).values({
      formData,
      templateSlug: slug,
      aiResponce: aiOutput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/YYYY"),
    });

    console.log(result);
  };

  return (
    <div className="p-5">
      <Link href="/dashboard">
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 py-3">
        <FormSection
          SelectedTemplate={SelectedTemplate}
          userFormInput={GenerateAIContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
