
import './AnalyzeForm.scss';
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Input, Button, Form } from "antd";

interface IFormInput {
  filename: string;
  url: string;
  typeanalyze: string;
}
const AnalyzeForm: React.FC = () => {

  const { handleSubmit, control, formState: {isValid , errors}} = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    
    if(isValid){
      console.log(data);
    }
  
  }

  return (
    <Form
      name="fileloadfm"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 16 }}
      onFinish={handleSubmit(onSubmit)}
    >
      <Form.Item
        label="file name"
        name="filename"
      >
        <div className={errors.filename ?'ant-form-item-has-error':'' } >
            <Controller
              render={({ field }) => <Input   {...field} />}
              name="filename"
              control={control}
              rules={{ required: true }}
            />
            {errors.filename &&  <span className="alerterror">  file name is required </span>}
        </div>
      </Form.Item>


       <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary"
         htmlType="submit"
         >
          Analyze
        </Button>
      </Form.Item>

    </Form>
  );
}

export default AnalyzeForm;
