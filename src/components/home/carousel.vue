<template>
	<div class="carousel" id="div">
		<div style="border-bottom: 2px solid #89A0B7;display: flex;align-items: center;justify-content: center;height: 60px;">
         <p style="margin: 0 auto;">轮播图管理</p>
         <el-button  type="primary" style="margin-right:10px;"> 添加 </el-button>
        </div>
		<el-table
		       stripe
               style="width: 98%;margin:20px auto 10px auto;"
               border
               >
		      <el-table-column
		        type="index"
                label="序号"
                align="center"
                width="180"
                >
		      </el-table-column>
		      <el-table-column
		        align="center"
		        label="图片"
		        width="180"
		        >
		        <template slot-scope="scope">
		        	<img :src="scope.row.bannerUrl"/>
		        </template>
		      </el-table-column>
		      <el-table-column
		      	align="center"
		        label="超链接">
		      </el-table-column>
		      <el-table-column
		       align="center"
		       label="操作"
		       >
		       <template slot-scope="scope">
			        <el-button
			          size="mini"
			          >修改</el-button>
			        <el-button
			          size="mini"
			          ></el-button>
			        <el-button
			          size="mini"
			          type="danger"
			         >删除</el-button>
              </template>
		    </el-table-column>

		</el-table>
		<!--新增轮播图-->
		<el-dialog title="新增轮播图"
                       width="600px">
                <div>
                    <carouselAdd ref="zizhiadd" ></carouselAdd>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary" >确认</el-button>
                    <el-button>取消</el-button>
                </span>
        </el-dialog>
        <!--修改轮播图-->
        <el-dialog title="修改轮播图"
                       width="600px">
                <div>
                    <modifyPic ref="modifysure"></modifyPic>
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button type="primary">确认</el-button>

                </span>
        </el-dialog>
	</div>
</template>

<script>

</script>

<style scoped="scoped">
	.carousel{
		width: 100%;
		height: 1000px
	}
	img {
		padding-top: 5px;
		height: 80px;
        width: 130px;
    }
</style>
