import { useEffect, useState } from "react";
import { PropsDaftarFAQ } from "@/data/props-daftar-faq";

export const DetailPertanyaanDanJawaban = ({ filteredAnswer }) => {
	const [openDetail, setOpenDetail] = useState(null);
	const [filteredQuestion, setFilteredQuestion] = useState([]);
	const HandleOpenDetail = index => setOpenDetail(openDetail === index ? null : index);

	useEffect(() => {
		setFilteredQuestion(filteredAnswer.includes("Semua") ? PropsDaftarFAQ : PropsDaftarFAQ.filter(faq => filteredAnswer.includes(faq.kategori)));
	}, [filteredAnswer]);

	return (
		<section className="flex h-fit w-full flex-col text-[#006400] lg:w-3/4">
      {filteredQuestion.filter(faq => faq.kategori?.includes(faq.kategori)).map((faq, index) =>
        <div key={faq.id} className="flex cursor-pointer flex-col border-t border-y-[#003400] last:border-b" onClick={() => HandleOpenDetail(index)}>
          {faq.pertanyaan &&
            <h3 className="group my-4 text-lg font-semibold transition-all duration-300 ease-in-out lg:hover:text-[#003400]">
              <span className="lg:bg-gradient-to-r lg:from-[#006400] lg:to-[#006400] lg:bg-[length:0%_0.125rem] lg:bg-left-bottom lg:bg-no-repeat lg:transition-all lg:duration-500 lg:ease-out lg:group-hover:bg-[length:100%_0.125rem]">
                {faq.pertanyaan}
              </span>
            </h3>
          }
          {openDetail === index && <h5 className="mb-6 text-justify">{faq.jawaban}</h5>}
        </div>
      )}
    </section>
	);
};